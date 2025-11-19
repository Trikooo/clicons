import React from 'react';
import config from '../config';

interface AnchorPointIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AnchorPointIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/anchor-point)
 * @see {@link https://clicons.dev/icon/anchor-point}
 */
const AnchorPointIcon = React.forwardRef<SVGSVGElement, AnchorPointIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M19 12C19 11.1716 19.6716 10.5 20.5 10.5C21.3284 10.5 22 11.1716 22 12C22 12.8284 21.3284 13.5 20.5 13.5C19.6716 13.5 19 12.8284 19 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M2 12C2 11.1716 2.67157 10.5 3.5 10.5C4.32843 10.5 5 11.1716 5 12C5 12.8284 4.32843 13.5 3.5 13.5C2.67157 13.5 2 12.8284 2 12Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929M13.7071 10.2929C14 10.5858 14 11.0572 14 12C14 12.9428 14 13.4142 13.7071 13.7071M13.7071 10.2929C13.7071 10.2929 13.7071 10.2929 13.7071 10.2929ZM10.2929 10.2929C10 10.5858 10 11.0572 10 12C10 12.9428 10 13.4142 10.2929 13.7071M10.2929 10.2929C10.2929 10.2929 10.2929 10.2929 10.2929 10.2929ZM10.2929 13.7071C10.5858 14 11.0572 14 12 14C12.9428 14 13.4142 14 13.7071 13.7071M10.2929 13.7071C10.2929 13.7071 10.2929 13.7071 10.2929 13.7071ZM13.7071 13.7071C13.7071 13.7071 13.7071 13.7071 13.7071 13.7071Z'
    }
  ],
  [
    'path',
    {
      d: 'M20.7071 2.29289C20.4142 2 19.9428 2 19 2C18.0572 2 17.5858 2 17.2929 2.29289M20.7071 2.29289C21 2.58579 21 3.05719 21 4C21 4.94281 21 5.41421 20.7071 5.70711M20.7071 2.29289C20.7071 2.29289 20.7071 2.29289 20.7071 2.29289ZM17.2929 2.29289C17 2.58579 17 3.05719 17 4C17 4.94281 17 5.41421 17.2929 5.70711M17.2929 2.29289C17.2929 2.29289 17.2929 2.29289 17.2929 2.29289ZM17.2929 5.70711C17.5858 6 18.0572 6 19 6C19.9428 6 20.4142 6 20.7071 5.70711M17.2929 5.70711C17.2929 5.70711 17.2929 5.70711 17.2929 5.70711ZM20.7071 5.70711C20.7071 5.70711 20.7071 5.70711 20.7071 5.70711Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.70711 18.2929C6.41421 18 5.94281 18 5 18C4.05719 18 3.58579 18 3.29289 18.2929M6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071M6.70711 18.2929C6.70711 18.2929 6.70711 18.2929 6.70711 18.2929ZM3.29289 18.2929C3 18.5858 3 19.0572 3 20C3 20.9428 3 21.4142 3.29289 21.7071M3.29289 18.2929C3.29289 18.2929 3.29289 18.2929 3.29289 18.2929ZM3.29289 21.7071C3.58579 22 4.05719 22 5 22C5.94281 22 6.41421 22 6.70711 21.7071M3.29289 21.7071C3.29289 21.7071 3.29289 21.7071 3.29289 21.7071ZM6.70711 21.7071C6.70711 21.7071 6.70711 21.7071 6.70711 21.7071Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 12H10'
    }
  ],
  [
    'path',
    {
      d: 'M14 12H19'
    }
  ],
  [
    'path',
    {
      d: 'M12 10C12 8 12.8333 4 17 4'
    }
  ],
  [
    'path',
    {
      d: 'M12 14C12 16 11.1667 20 7 20'
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

AnchorPointIcon.displayName = 'AnchorPointIcon';
export default AnchorPointIcon;
