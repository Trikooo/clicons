import React from 'react';
import config from '../config';

interface VirtualRealityVr2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name VirtualRealityVr2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/virtual-reality-vr2)
 * @see {@link https://clicons.dev/icon/virtual-reality-vr2}
 */
const VirtualRealityVr2Icon = React.forwardRef<SVGSVGElement, VirtualRealityVr2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13 3H11C6.75736 3 4.63604 3 3.31802 4.31802C2 5.63604 2 7.75736 2 12C2 16.2426 2 18.364 3.31802 19.682C4.63604 21 6.75736 21 11 21H13C17.2426 21 19.364 21 20.682 19.682C22 18.364 22 16.2426 22 12C22 7.75736 22 5.63604 20.682 4.31802C19.364 3 17.2426 3 13 3Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 10L9.24536 13.9123C8.92013 14.6374 8.75751 15 8.5 15C8.24249 15 8.07987 14.6374 7.75464 13.9123L6 10M14 15V13M14 13V11C14 10.5286 14 10.2929 14.1464 10.1464C14.2929 10 14.5286 10 15 10H16.5C17.3284 10 18 10.6716 18 11.5C18 12.3284 17.3284 13 16.5 13M14 13H16.5M16.5 13L17.5 15'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

VirtualRealityVr2Icon.displayName = 'VirtualRealityVr2Icon';
export default VirtualRealityVr2Icon;
