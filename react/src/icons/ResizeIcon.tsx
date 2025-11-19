import React from 'react';
import config from '../config';

interface ResizeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name ResizeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/resize)
 * @see {@link https://clicons.dev/icon/resize}
 */
const ResizeIcon = React.forwardRef<SVGSVGElement, ResizeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 4H21M17 4C17 4.56018 18.4943 5.60678 19 6M17 4C17 3.43982 18.4943 2.39322 19 2'
    }
  ],
  [
    'path',
    {
      d: 'M7 4H3M7 4C7 3.43982 5.5057 2.39322 5 2M7 4C7 4.56018 5.5057 5.60678 5 6'
    }
  ],
  [
    'path',
    {
      d: 'M9.8348 22L9.8348 21.0513C9.8348 20.4058 9.6261 19.7775 9.23964 19.2595L5.58206 14.3566C5.16022 13.7911 4.8233 13.0896 5.1018 12.4419C5.55264 11.3935 6.82458 10.7124 8.38144 12.2843L9.97865 13.9937L9.97865 3.57057C10.0349 1.52742 13.3229 1.42614 13.4635 3.57057L13.4635 9.5106C14.9435 9.31946 21.9155 10.3629 20.8993 14.7831C20.851 14.9931 20.8028 15.2063 20.7557 15.4165C20.5501 16.3353 19.9422 17.9727 19.2719 18.93C18.5741 19.9266 18.8203 20.9192 18.8203 22'
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

ResizeIcon.displayName = 'ResizeIcon';
export default ResizeIcon;
