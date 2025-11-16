import React from 'react';
import config from '../config';

interface PlayListFavourite2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PlayListFavourite2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/play-list-favourite2)
 * @see {@link https://clicons.dev/icon/play-list-favourite2}
 */
const PlayListFavourite2Icon = React.forwardRef<SVGSVGElement, PlayListFavourite2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M21.5 12.5V11.05C21.5 7.01949 21.5 5.00424 20.2479 3.75212C18.9958 2.5 16.9805 2.5 12.95 2.5H11.05C7.01949 2.5 5.00424 2.5 3.75212 3.75212C2.5 5.00424 2.5 7.01949 2.5 11.05V12.95C2.5 16.9805 2.5 18.9958 3.75212 20.2479C5.00424 21.5 7.01949 21.5 11.05 21.5H12.5'
    }
  ],
  [
    'path',
    {
      d: 'M15.4515 15.859C16.4572 15.265 17.3349 15.5044 17.8621 15.8857C18.0783 16.042 18.1864 16.1202 18.25 16.1202C18.3136 16.1202 18.4217 16.042 18.6379 15.8857C19.1651 15.5044 20.0428 15.265 21.0485 15.859C22.3682 16.6386 22.6669 19.2104 19.6227 21.3801C19.0429 21.7934 18.7529 22 18.25 22C17.7471 22 17.4571 21.7934 16.8773 21.3801C13.8331 19.2104 14.1318 16.6386 15.4515 15.859Z'
    }
  ],
  [
    'path',
    {
      d: 'M14.9609 11.782C14.8347 12.2297 14.2381 12.546 13.0449 13.1787C11.8914 13.7903 11.3147 14.0961 10.8499 13.9732C10.6578 13.9224 10.4827 13.8259 10.3415 13.6929C10 13.3713 10 12.7475 10 11.5C10 10.2525 10 9.6287 10.3415 9.30711C10.4827 9.17415 10.6578 9.07763 10.8499 9.02681C11.3147 8.90388 11.8914 9.20969 13.0449 9.82131C14.2381 10.454 14.8347 10.7703 14.9609 11.218C15.013 11.4028 15.013 11.5972 14.9609 11.782Z'
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

PlayListFavourite2Icon.displayName = 'PlayListFavourite2Icon';
export default PlayListFavourite2Icon;
