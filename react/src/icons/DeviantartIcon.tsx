import React from 'react';
import config from '../config';

interface DeviantartIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DeviantartIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/deviantart)
 * @see {@link https://clicons.dev/icon/deviantart}
 */
const DeviantartIcon = React.forwardRef<SVGSVGElement, DeviantartIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 2C18.8273 2 19 2.17267 19 3V6.13854C19 6.44216 18.9987 6.44633 18.8289 6.698L15.5528 11.5517C15.0898 12.2375 14.8584 12.5804 14.9994 12.8458C15.1404 13.1111 15.5541 13.1111 16.3816 13.1111H18C18.8273 13.1111 19 13.2838 19 14.1111V16.5556C19 17.3829 18.8273 17.5556 18 17.5556H12.5626C11.5215 17.5556 11.4872 17.5738 10.9048 18.4367L8.79735 21.5594C8.50616 21.9909 8.48899 22 7.96846 22H6C5.17267 22 5 21.8273 5 21V17.8615C5 17.5578 5.00128 17.5537 5.17114 17.302L8.44724 12.4483C8.91018 11.7625 9.14164 11.4196 9.00062 11.1542C8.85959 10.8889 8.44585 10.8889 7.61838 10.8889H6C5.17267 10.8889 5 10.7162 5 9.88889V7.44445C5 6.61711 5.17267 6.44444 6 6.44444H11.4374C12.4785 6.44444 12.5128 6.4262 13.0952 5.56326L15.2027 2.44059C15.4938 2.00912 15.511 2 16.0315 2H18Z',
      fillRule: 'evenodd'
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

DeviantartIcon.displayName = 'DeviantartIcon';
export default DeviantartIcon;
