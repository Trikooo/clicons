import React from 'react';
import config from '../config';

interface Structure3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Structure3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/structure3)
 * @see {@link https://clicons.dev/icon/structure3}
 */
const Structure3Icon = React.forwardRef<SVGSVGElement, Structure3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.2857 2H13.7143C15.7888 2 16 2.92494 16 4.5C16 6.07506 15.7888 7 13.7143 7H10.2857C8.2112 7 8 6.07506 8 4.5C8 2.92494 8.2112 2 10.2857 2Z'
    }
  ],
  [
    'path',
    {
      d: 'M4 13C4.24764 11.377 5.24469 11 7.98759 11H16.0153C18.7582 11 19.7524 11.377 20 13'
    }
  ],
  [
    'path',
    {
      d: 'M2 15C2 14.0572 2 13.5858 2.29289 13.2929C2.58579 13 3.05719 13 4 13C4.94281 13 5.41421 13 5.70711 13.2929C6 13.5858 6 14.0572 6 15C6 15.9428 6 16.4142 5.70711 16.7071C5.41421 17 4.94281 17 4 17C3.05719 17 2.58579 17 2.29289 16.7071C2 16.4142 2 15.9428 2 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M18 15C18 14.0572 18 13.5858 18.2929 13.2929C18.5858 13 19.0572 13 20 13C20.9428 13 21.4142 13 21.7071 13.2929C22 13.5858 22 14.0572 22 15C22 15.9428 22 16.4142 21.7071 16.7071C21.4142 17 20.9428 17 20 17C19.0572 17 18.5858 17 18.2929 16.7071C18 16.4142 18 15.9428 18 15Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 7L12 14'
    }
  ],
  [
    'path',
    {
      d: 'M12 19L12 22'
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

Structure3Icon.displayName = 'Structure3Icon';
export default Structure3Icon;
