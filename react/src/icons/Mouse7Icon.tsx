import React from 'react';
import config from '../config';

interface Mouse7IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mouse7Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mouse7)
 * @see {@link https://clicons.dev/icon/mouse7}
 */
const Mouse7Icon = React.forwardRef<SVGSVGElement, Mouse7IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5 2C5 2.82843 5.67157 3.5 6.5 3.5L9 3.5C10.8856 3.5 11.8284 3.5 12.4142 4.08579C12.8183 4.48987 12.9436 5.06385 12.9825 6'
    }
  ],
  [
    'path',
    {
      d: 'M7.19248 18.0711C7.34438 19.9843 8.85933 21.6088 10.812 21.8495C11.5301 21.9379 12.2601 22 13 22C13.7398 22 14.4699 21.9379 15.1879 21.8495C17.1407 21.6088 18.6555 19.9843 18.8074 18.0711C18.9128 16.7453 19 15.3856 19 14C19 12.6144 18.9128 11.2547 18.8074 9.92895C18.6555 8.01572 17.1407 6.39115 15.1879 6.15056C14.4699 6.06209 13.7398 6 13 6C12.2601 6 11.5301 6.06209 10.812 6.15056C8.85933 6.39115 7.34438 8.01572 7.19248 9.92895C7.08722 11.2547 7 12.6144 7 14C7 15.3856 7.08722 16.7453 7.19248 18.0711Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 9V11'
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

Mouse7Icon.displayName = 'Mouse7Icon';
export default Mouse7Icon;
